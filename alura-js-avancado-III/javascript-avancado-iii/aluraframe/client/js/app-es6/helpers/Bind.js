class Bind {
	constructor(model, view, ...props){//REST Operator, parece com Spread Operator
		let proxy = ProxyFactory.create(
            model,
            props,
           	model => view.update(model)
        );

        view.update(model);

        return proxy;
	}
}