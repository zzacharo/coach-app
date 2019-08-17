import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { schema } from './schemas';

const log = type => console.log.bind(console, type);
const uiSchema = {
  sessionDetails: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 10,
    },
  },
};

export class WodEditorForm extends Component {
  render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
      />
    );
  }
}
