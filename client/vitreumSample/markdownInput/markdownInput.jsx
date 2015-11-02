var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var marked = require('marked');

var MarkdownInput = React.createClass({

	getDefaultProps: function() {
		return {
			text : '',
			onChange : function(){}
		};
	},

	render : function(){
		var self = this;
		return(
			<div className='markdownInput'>
				<div className='helpText'>
					<a href='https://daringfireball.net/projects/markdown/syntax' target='_blank'>Markdown Syntax</a>
				</div>

				<textarea value={this.props.text} onChange={this.props.onChange} />

				<div className='markdown_example'>
					<div dangerouslySetInnerHTML={{__html:marked(this.props.text)}} />
				</div>

			</div>
		);
	}
});

module.exports = MarkdownInput;
