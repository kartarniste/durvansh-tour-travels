import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TaxiItems from './TaxiItems';
import TaxiItemForm from './TaxiItemForm';
import Container from '@mui/material/Container';

import { useNavigate } from 'react-router-dom';

export default function InvoiceForm(props) {

const navigate = useNavigate();
const [formValues, setFormValues] = React.useState(props.formValues || {});
const [openTaxiItem, setOpen] = React.useState(false);
const handleAddTaxi = () => setOpen(true);
const handleClose = () => setOpen(false);

const onTextFieldChange =(field)=>{
    let value = field.target.value;
    let key = field.target.id;

    setFormValues({...formValues, [key] : value});
}

const taxiItemsFn = (taxiItems) =>{
    let items = formValues.taxiItems || [];
    setFormValues({...formValues, taxiItems : [...items, taxiItems]});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem('invoice', JSON.stringify(formValues));
    navigate('/invoice');
}

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                id="billNo"
                name="billNo"
                label="Bill No"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange ={(field)=>{
                            onTextFieldChange(field);
                        }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            name="date"
            label="Date"
            fullWidth
            autoComplete="date"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>
          
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="clientPartyName"
            name="clientPartyName"
            label="Client Party Name"
            fullWidth
            autoComplete="clientPartyName"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="clientGSTNo"
            name="clientGSTNo"
            label="Client GST No:"
            fullWidth
            autoComplete="Client GST Number"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="CGST"
            name="CGST"
            label="CGST"
            fullWidth
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="SGST"
            name="SGST"
            label="SGST"
            fullWidth
            autoComplete="SGST"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tollTax"
            name="tollTax"
            label="Toll Tax"
            fullWidth
            autoComplete="TollTax"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
            
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ownergst"
            name="ownergst"
            label="Owner GSTN"
            fullWidth
            autoComplete="ownergst"
            variant="standard"
            onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
            
          />
        </Grid>
        <Grid item xs={12}>
            <Button
                variant="contained"
                onClick={handleAddTaxi}
                sx={{ mt: 3, ml: 1 }}
                >
                Add Taxi
                </Button>
        </Grid> 

        <TaxiItemForm open={openTaxiItem} handleClose={handleClose} taxiItemsFn={taxiItemsFn}/>

        <TaxiItems taxiItems = {formValues.taxiItems}/>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="taxCharge" value="yes"  onChange ={(field)=>{
                field.target.value = field.target.value.toUpperCase();
                        onTextFieldChange(field);
                    }} />}
            label="Whether the tax is payable on reverse charge mechanism"
          />
        </Grid>
        <Grid item xs={12}>
            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, ml: 1 }}
                >
                Submit
            </Button>
        </Grid>
      </Grid>
    </Box>
  );
}