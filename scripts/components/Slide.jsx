import React from 'react';
import marked from 'marked';

class Slide extends React.Component {
  render(){
    let { content, title } = this.props.slide;
    let renderedContent = {__html: marked(content)};
    return (
      <section className='slide'>
        <h1>{ title }</h1>
        <section dangerouslySetInnerHTML={ renderedContent }></section>
      </section>
    )
  }
}
Slide.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
}


export default Slide;
