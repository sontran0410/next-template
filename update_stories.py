import os, requests, re, textwrap, pathlib

COMP_DIR = pathlib.Path('src/components/ui')

for comp_path in sorted(COMP_DIR.glob('*.tsx')):
    if comp_path.name.endswith('.stories.tsx'):
        continue
    name = comp_path.stem
    doc_url = f'https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/content/docs/components/{name}.mdx'
    r = requests.get(doc_url)
    if r.status_code != 200:
        print('Doc missing for', name)
        continue
    text = r.text
    if '## Usage' not in text:
        print('No usage section for', name)
        continue
    sec = text.split('## Usage',1)[1]
    snippets = re.findall(r"```tsx[^\n]*\n(.*?)```", sec, re.S)
    if len(snippets) < 2:
        print('No snippet for', name)
        continue
    import_snippet, example_snippet = snippets[:2]
    match = re.search(r"import \{([^}]*)\}", import_snippet, re.S)
    if match:
        component_names = [n.strip() for n in match.group(1).replace('\n',' ').split(',') if n.strip()]
    else:
        component_names = [name.replace('-', ' ').title().replace(' ', '')]
    imports = ",\n  ".join(component_names)
    first_name = component_names[0]
    story_file = COMP_DIR / f'{name}.stories.tsx'
    with story_file.open('w') as f:
        f.write(f"""import type {{ Meta, StoryObj }} from '@storybook/nextjs-vite';
import {{
  {imports}
}} from './{name}';

const meta: Meta<typeof {first_name}> = {{
  title: 'ui/{first_name}',
  component: {first_name},
}};
export default meta;

type Story = StoryObj<typeof {first_name}>;

export const Default: Story = {{
  render: () => (
{textwrap.indent(example_snippet.rstrip(), '    ')}
  ),
}};
""")
    print('Updated', story_file)
