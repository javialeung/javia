webpackJsonp([51008416844421],{216:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data;if(t.allMarkdownRemark){var a=t.allMarkdownRemark.edges;return o.default.createElement("div",{className:"project-posts"},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return o.default.createElement("div",{className:"project-post-preview",key:t.id,onClick:function(){return(0,u.navigateTo)(t.frontmatter.path)},style:{backgroundImage:"url("+t.frontmatter.cover+")"}},o.default.createElement("h2",{className:"post-title"},o.default.createElement("div",null,t.frontmatter.title)))}))}return o.default.createElement("div",{className:"general-content"},"Fashion Illustration")}t.__esModule=!0,t.pageQuery=void 0,t.default=n;var l=a(1),o=r(l),u=a(15);a(47);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-fashion-illustration-js-6387a8385ba8be69cae3.js.map