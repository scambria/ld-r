//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        'generic': {
            host: 'blazegraph', port: 9999, path: '/blazegraph/sparql', endpointType: 'blazegraph'
        },
        'http://blazegraph:9090/blazegraph/sparql' : { 
            host: 'blazegraph', port: 9999, path: '/blazegraph/sparql', graphName: 'default', endpointType: 'blazegraph'
     	}
    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
