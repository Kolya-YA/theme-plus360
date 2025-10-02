export const CONFIG = {
  contact: {
    formEndpoint: {{ site.Params.contact.formEndpoint | jsonify }}
  },
  site: {
    name: {{ site.Title | jsonify }},
    email: {{ site.Params.email | jsonify }}
  }
};

console.log('Site loaded. Current config:', CONFIG);
window.CONFIG = CONFIG;