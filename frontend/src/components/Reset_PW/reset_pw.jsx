import React from 'react';
import { useFormik } from 'formik';
import {
    VStack,
    HStack,
    Button,
    Checkbox,
} from '@chakra-ui/react';
import FormField from '../sign_up/FormField'; 
import './reset_pw.modules.css';

function ResetPW() {
    const formik = useFormik({
        initialValues: {
            newPw: '',
            cfNewPw: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <VStack spacing='6' alignItems='center'>
                <div class="container">
                <div class="form-container">
                </div>
                </div>
                <h1 style={{ fontWeight: 'bold' }}>Reset New Password</h1>
                <FormField
                    label='New Password'
                    type='password'
                    placeholder='New Password'
                    onChange={formik.handleChange}
                    value={formik.values.newPw}
                    name='newPw'
                />
                <FormField
                    label='Confirm New Password'
                    type='password'
                    placeholder='Confirm New Password'
                    onChange={formik.handleChange}
                    value={formik.values.cfNewPw}
                    name='cfNewPw'
                />
                <HStack justify='space-between'>
                </HStack>
                <Button colorScheme='teal' type='submit'>
                    Submit
                </Button>
            </VStack>
        </form>
    );
}

export default ResetPW;
