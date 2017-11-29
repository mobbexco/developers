webpackJsonp([8],{588:function(n,e,t){var r=t(6),a=t(32),s=t(209).PageRenderer;s.__esModule&&(s=s.default);var o=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(599)}},componentWillMount:function(){},render:function(){return r.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,n.exports=o},599:function(n,e){n.exports="### Librer\xeda Javascript\n\n__Ejemplo__\n```code\nlang: javascript\n---\nvar mobbex = Mobbex.init('zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj');\n\nvar sources = await mobbex.getSources();\n\nconsole.info(sources);\n```\n\n#### M\xe9todos\n\n    static getInstance(): Mobbex;\n    /**\n     * Iniliaze the Library. The API-Key is required in order to make calls\n     *\n     * @param {string} api_key Provided API-Key\n     * @param {string} lang Optional\n     *\n     * @memberOf Mobbex\n     */\n    static init(api_key: string, options?: MobbexOptions): Mobbex;\n    /**\n     * Set the language for responses\n     *\n     * @param {any} lang en/es\n     *\n     * @memberOf Mobbex\n     */\n    setLanguage(lang: string): void;\n    /**\n     * Get the current language\n     *\n     * @returns String Current language\n     *\n     * @memberOf Mobbex\n     */\n    getLanguage(): string;\n    /**\n     * Sets listener for Entity events trough Sockets\n     *\n     * @param {*} callback\n     *\n     * @memberof Mobbex\n     */\n    setEntitySocketListener(callback: any): void;\n    /**\n     * @ignore\n     */\n    getHeaders(): any;\n    /**\n     * Make an HTTP Post call with the required headers\n     *\n     * @param {string} url Relative or absolute url to Mobbex\n     * @param {object} data Data to be sent\n     *\n     * @returns Promise\n     *\n     * @memberOf Mobbex\n     */\n    httpPost(url: string, data: any, custom_headers?: any): Promise<any>;\n    /**\n     * Makes an HTTP Get call with the required headers\n     *\n     * @param {string} url Relative or absolute url to Mobbex\n     * @param {object} query Query parameters\n     *\n     * @returns Promise\n     *\n     * @memberOf Mobbex\n     */\n    httpGet(url: string, query: any, custom_headers?: any): Promise<any>;\n    /**\n     * Sets the Entity\n     *\n     * @param id {String} Entity ID\n     */\n    setEntity(id: any): void;\n    /**\n     * Set the entity key. If you are using Mobbex 2.0 Entity Key is Required instead of setEntity\n     *\n     * @param {string} entity_key\n     *\n     * @memberOf Mobbex\n     */\n    setEntityKey(entity_key: any): void;\n    /**\n     * Set the Access Token obtained for an Entity.\n     *\n     * @param {string} access_token\n     *\n     * @memberOf Mobbex\n     */\n    setAccessToken(access_token: any): void;\n    /**\n     * Set the session token\n     *\n     * @param {string} token\n     *\n     * @memberOf Mobbex\n     */\n    setSession(token: string): void;\n    /**\n     * Remove the session\n     *\n     * @memberOf Mobbex\n     */\n    clearSession(): void;\n    /**\n     * Get Entity Sources\n     *\n     * @returns Promise\n     */\n    getSources(): Promise<any>;\n    /**\n     * Returns all the Installments available for the Source\n     *\n     * @param source_id {String} Source ID\n     * @returns Promise\n     */\n    getInstallmentsBySource(source_id: any): Promise<any>;\n    /**\n     * Detects a Source based on the Source Number.\n     * This method is useful to detect cards\n     *\n     * @param source_number {String} Source Number\n     * @returns Promise\n     */\n    detectSource(source_number?: string): Promise<any>;\n    /**\n     * Given a Total, Source and Installment calculates the charges of the Transaction\n     *\n     * @param total {Number} Total of the Transaction\n     * @param source {String} Source ID\n     * @param installment {String} Installment ID\n     *\n     * @returns Promise\n     */\n    calculate(total: number, source: string, installment: string): Promise<any>;"}});
//# sourceMappingURL=8.1e19c8ff.chunk.js.map