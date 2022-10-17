# Class 10 - Forms Exercise

## Template Driven Forms

This approach is best when you only need to create a simple form. Such as user and password login fields.
TDF allows you define the form within the HTML template without writing any code inside the typescript file.
The cons of Template Driven Forms is that they are not as flexible as Reactive Forms and also the larger the form gets the more cluttered the template becomes.

## Reactive Forms

This approach is best when you need to create a more complex form. Reactive forms allow you to define your form inside your typescript first. You then map each form control to the FormGroup inside your html template.
Things like validations are set on the FormGroup object within your logic. The benefits to Reactive Forms include flexability and cleaner html template code.

I think it makes sense to use reactive forms unless you have only a couple inputs and you know that you will only ever have that many. If am going to need to scale the form to be more complex or have a lot more inputs reactive forms makes more sense.
