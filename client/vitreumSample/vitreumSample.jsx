var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var MarkdownInput = require('./markdownInput/markdownInput.jsx');

var VitreumSample = React.createClass({
	getDefaultProps: function() {
		return {
			initalText : ''
		};
	},

	getInitialState: function() {
		return {
			text: this.props.initalText
		};
	},

	componentDidMount: function() {
		var storedText = localStorage.getItem('markdown_text');
		if(storedText){
			this.setState({
				text : storedText
			})
		}
	},

	handleChange : function(e){
		this.setState({
			text : e.target.value
		});
		localStorage.setItem("markdown_text", e.target.value);
	},

	render : function(){
		var self = this;
		return(
			<div className='vitreumSample'>
				<h1> Markdown Example</h1>

				<div className='form'>
					<MarkdownInput
						text={this.state.text}
						onChange={this.handleChange}
					/>

					<button>yo</button>
				</div>
			</div>
		);
	}
});

module.exports = VitreumSample;
