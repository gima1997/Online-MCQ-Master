import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false

        };

        this.getValue = this.getValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    getValue(e){
        e.preventDefault();
        this.setState({
            hasAgreed: e.target.checked
        })
    }

    render() {
        return (
            <div className="Login">
                <div className="App__Aside">
                </div>
                <div className="App__Form">
                    <div className="FormCenter">
                        <form action="#" className="FormFields" onSubmit={this.handleSubmit}>
                            <div>
                                <h3 className="display-4">New here?</h3>
                                <p className="head1 lead">Sign up and discover great amount of new mcq papers!</p>
                            </div>
                            <br/>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="name">Full Name</label>
                                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
                            </div>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">E-mail</label>
                                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
                            </div>
                            <div className="FormField">
                                <label className="FormField__CheckboxLabel lead" htmlFor="checkbox">
                                    <p>I agree all statement in</p>
                                    <a href="/" className="FormField__TermsLink lead">terms of services</a>
                                </label>
                            </div>
                            <div className="FormField">
                                <button className="FormField__Button mr-20">Sign Up</button><a href="/sign-in" className="FormField__Link">I'm already member</a>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default SignUpForm;


