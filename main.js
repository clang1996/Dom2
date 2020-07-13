// // const div = dom.create('<div><span>hi</span></div>')
// const div = dom.create("<div>newdiv</div>")
// dom.after(test,div)
// const div3 = dom.create("<div id='parent'></div>")
// dom.wrap(test,div3)
//
// dom.attr(test,'title','hi,二狗')
// const title = dom.attr(test,'title')
// console.log(`title:${title}`)
dom.on2('ul', 'click', '#xxx',
	()=>{console.log('ul被点击了')}
);

