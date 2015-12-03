var postTo = [
  'Twitter',
  'Google Plus',
  'Reddit',
  'LinkedIn',
  'Facebook',
  'Hacker News',
  'Lobster',
  'EchoJS',
  'LiveJS'
];

var queryString = '?utm_source={source}&utm_medium=social&utm_campaign={campaign}';

var baseUrlEl = document.getElementById('org_url');
var campaignEl = document.getElementById('campaign');
var campaignLinksWrapperEl = document.getElementById('campaign_links');

function generateUrls() {
  campaignLinksWrapperEl.innerHTML = '';
  
  postTo.forEach(function(source) {
    var baseUrl = baseUrlEl.value;
    var campaign = campaignEl.value;
    
    source = source.toLowerCase().replace(' ', '_');
    var query = queryString.replace('{source}', source)
                           .replace('{campaign}', campaign);
    var url = baseUrl + query;
    
    var wrapper = document.createElement('div');
    var label = document.createElement('span');
    label.textContent = source + ': ';
    var input = document.createElement('input');
    input.value = url;
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    
    campaignLinksWrapperEl.appendChild(wrapper);
  });
}

document.getElementById('org_url').addEventListener('keyup', generateUrls);
document.getElementById('campaign').addEventListener('keyup', generateUrls);
