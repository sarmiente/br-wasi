import { z as Fragment, _ as __astro_tag_component__, k as createVNode } from './astro/server_DqMNCrZL.mjs';
import { $ as $$Image } from './_astro_assets_Zk9YBuIc.mjs';
import 'clsx';

const frontmatter = {
  "title": "Exploring The Iconic Cartagena Clock Tower",
  "description": "Explore The Iconic Cartagena Clock Tower, unraveling its rich history, architectural marvels, and cultural significance.",
  "pubDate": "Apr 24 2024",
  "heroImage": "https://images.unsplash.com/photo-1563131896-ee67f23bbc98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

const url = "src/content/blog/exploring-the-iconic-cartagena-clock-tower.mdx";
const file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/content/blog/exploring-the-iconic-cartagena-clock-tower.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/content/blog/exploring-the-iconic-cartagena-clock-tower.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
