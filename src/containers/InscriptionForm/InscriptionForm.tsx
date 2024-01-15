import { PrimaryBtn } from '@/components/Button';
import { Form, Input } from 'antd';
import { Container, FormContainer } from './styles';

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

export const InscriptionForm = () => {
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  return (
    <Container>
      <h1>Get Real Results. Get Your Status Quo. Inscribe Today!</h1>

      <FormContainer>
        <Form
          name='basic'
          layout='vertical'
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please, input your name.' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='E-mail'
            name='email'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail.',
              },
              {
                required: true,
                message: 'Please, input your E-mail.',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Message'
            name='message'
            rules={[{ required: true, message: 'Please, input your message.' }]}
          >
            <Input.TextArea rows={4} showCount maxLength={1000} />
          </Form.Item>

          <Form.Item>
            <PrimaryBtn htmlType='submit'>Submit</PrimaryBtn>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  );
};
