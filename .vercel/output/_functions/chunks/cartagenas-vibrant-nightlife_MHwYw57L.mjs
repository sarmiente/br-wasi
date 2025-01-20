import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_IEYgzetq.mjs';
import { $ as $$Image } from './_astro_assets_D7nyZgy_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cartagena's Vibrant Nightlife: Best 4 places to Dance the Night Away",
  "description": "Experience the rhythm of Cartagena's nightlife! Unlock Cartagena's Vibrant Nightlife and cultural hotspots. Your guide to dancing the night away!",
  "pubDate": "Mar 10 2024",
  "heroImage": "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/blog/cartagenas-vibrant-nightlife.mdx";
const file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/content/blog/cartagenas-vibrant-nightlife.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/content/blog/cartagenas-vibrant-nightlife.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
