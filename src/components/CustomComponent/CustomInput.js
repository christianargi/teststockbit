import React, { Component } from 'react';
import _ from 'lodash';
import { Input, Row } from 'antd';
// import './customStyle.scss'

export default class InputText extends Component {

    shouldComponentUpdate(nextProps, nextState) {

        if (this.props.onSubmit !== nextProps.onSubmit) {
            return true
        }
        if (this.props.disabled !== nextProps.disabled) {
            return true
        }
        if (this.props.initialValue !== nextProps.initialValue) {
            return true;
        }
        if (this.props.name !== nextProps.name) {
            return true;
        }
        return false;
    }

    render() {
        const { name, id, setFieldsValue, labelField, placeholder, initialValue, onChange, disabled, formItemLayout, validation, isRequired, min, max, addonBefore, onSubmit, width = '100%' } = this.props;
        debugger
        return (
            <Row>
                <Input className={'inputAntd'} onChange={onChange()} size="default" style={{ width: width }} disabled={disabled} name={name} id={id} placeholder={placeholder} />
            </Row >
        )
    }
}