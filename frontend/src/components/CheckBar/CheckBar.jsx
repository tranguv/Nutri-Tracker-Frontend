import { Checkbox } from "@chakra-ui/react";

const CheckBar = ({ tasks }) => {
    return (
        <div style={{ height: '40px', width: '300px', display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '10px', background:'black', gap: '10px', padding: '10px'}}>
            <Checkbox colorScheme="green" defaultChecked />
            <div style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}> OK </div>
            <div style={{ width: '1px', height: '90%', background: 'white'}}></div>
            <div style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}> 00:00 </div>
        </div>
    );
}

export default CheckBar;