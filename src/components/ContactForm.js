import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";


const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values: ', values);
        console.log('in JSON format: ', JSON.stringify(values));
    }
const validateContactForm = (values) => {
    const errors = {};

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)){
        errors.phoneNum = 'The phone number should only contain numbers.';
    }

    return errors;
};

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
    onSubmit={handleSubmit}
    validate={validateContactForm}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="firstName" md="2">
            First Name
          </Label>
          <Col md="10">
            <Field 
                name='firstName'
                placeholder='First Name'
                className="form-control" 
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="lastName" md="2">
            Last Name
          </Label>
          <Col md="10">
          <Field 
                name='lastName'
                placeholder='Last Name'
                className="form-control" 
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="phoneNum" md="2">
            Phone
          </Label>
          <Col md="10">
          <Field 
                name='phoneNum'
                placeholder='Phone'
                className="form-control" 
            />
            <ErrorMessage name='phoneNum'>
                {(msg) => <p className="text-danger">{msg}</p> }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="2">
            Email
          </Label>
          <Col md="10">
          <Field 
                name='email'
                placeholder='Email'
                type='email'
                className="form-control" 
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 4, offset: 2 }}>
            <Field
                name='agree'
                type='checkbox'
                className='form-check-input m-1'
                />{' '}
            May we contact you?
          </Label>
          <Col md="4">
            <Field 
                name='contactType'
                as='select'
                className="form-control"
            >
                <option value="phone">By Phone</option>
                <option value="email">By Email</option>
            </Field>   
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedback" md="2">
            Your Feedback
          </Label>
          <Col md="10">
          <Field 
                name='feedback'
                as='textarea'
                rows='row'
                // placeholder='Your Feedback'
                className="form-control" 
            />
          </Col>
        </FormGroup>

        <FormGroup row>
            <Col md={{ size: 10, offset: 2}}>
            <Button type="submit" color="primary">
                Send Feedback
            </Button>
            </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;