webpackJsonp([0xc260c743ec7c],{220:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data;if(t.allMarkdownRemark){var a=t.allMarkdownRemark.edges;return c.default.createElement("div",{className:"project-posts"},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return c.default.createElement("div",{className:"project-post-preview",key:t.id,onClick:function(){return(0,o.navigateTo)(t.frontmatter.path)},style:{backgroundImage:"url("+t.frontmatter.cover+")"}},c.default.createElement("h2",{className:"post-title"},c.default.createElement("div",null,t.frontmatter.title)))}))}return c.default.createElement("div",{className:"general-content"},"Crafts / Projects")}t.__esModule=!0,t.pageQuery=void 0,t.default=n;var l=a(1),c=r(l),o=a(15);a(47);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-projects-js-275466e1254df44b3daa.js.map