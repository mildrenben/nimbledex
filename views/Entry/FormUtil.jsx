const React = require('react');

const suffix = ['default', 'form-1', 'form-2'];

const FormUtil = React.createClass({
  render () {
    const props = this.props;
    const Tag = props.tag;

    const ContentsDefault = (
      <Tag className={`${props.className} ${props.className}--default`}>{props.data[props.stat]}</Tag>
    );

    if (props.data.forms === undefined) {
      return ContentsDefault;
    }

    const Contents = props.data.forms.map((form, i) => {
      return (
        <Tag className={`${props.className} ${props.className}--${suffix[i + 1]}`}>{form[props.stat]}</Tag>
      );
    });

    return (
      <span>
        {ContentsDefault}
        {Contents}
      </span>
    );
  },
});

module.exports = FormUtil;
