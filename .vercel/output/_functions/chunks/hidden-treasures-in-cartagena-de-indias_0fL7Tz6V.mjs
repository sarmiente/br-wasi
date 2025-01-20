import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_IEYgzetq.mjs';
import { $ as $$Image } from './_astro_assets_D7nyZgy_.mjs';
import 'i18next';
import 'clsx';

const frontmatter = {
  "title": "hidden.title",
  "description": "hidden.desc",
  "pubDate": "Apr 25 2024",
  "heroImage": "https://images.unsplash.com/photo-1560976027-3c09ce1c6da5?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

const url = "src/content/blog/hidden-treasures-in-cartagena-de-indias.mdx";
const file = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/content/blog/hidden-treasures-in-cartagena-de-indias.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/User.DESKTOP-H22LPQ4/Desktop/DEVs/brsolution-api/src/content/blog/hidden-treasures-in-cartagena-de-indias.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
