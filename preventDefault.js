// This is a very common practice of stopping a form from being submitted 
// when the user hits the enter key


 onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
             </div>
            );
        }