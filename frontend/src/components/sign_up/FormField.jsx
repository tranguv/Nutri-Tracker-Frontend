
import {FormControl,FormLabel,Input} from '@chakra-ui/react';

const FormField = ({ label, type, placeholder, onChange, value, name }) => (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} />
        </FormControl>
    );
    export default FormField;
