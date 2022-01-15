import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TaxiItemForm(props) {

  const [formValues, setFormValues] = React.useState(props.formValues || {});

  const addTaxi = (event)=>{
    event.preventDefault();
    const data = {...formValues};
          data.amount = parseFloat(data.basis) * parseFloat(data.rate);

          props.taxiItemsFn(data);

    props.handleClose();
  }

  const onTextFieldChange =(field)=>{
    let value = field.target.value;
    let key = field.target.id;

    setFormValues({...formValues, [key] : value});
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={()=> { 
            return false;
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={addTaxi} noValidate>
            <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="taxiNo"
                    name="taxiNo"
                    label="Taxi No"
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
                    id="taxiType"
                    name="taxiType"
                    label="Taxi Type"
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
                    id="basis"
                    name="basis"
                    label="Basis"
                    fullWidth
                    autoComplete="clientPartyName"
                    variant="standard"
                    onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="fromDate"
                    name="fromDate"
                    label="From Date"
                    fullWidth
                    autoComplete="From Date"
                    variant="standard"
                    onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
                />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="toDate"
                    name="toDate"
                    label="To Date"
                    fullWidth
                    autoComplete="toDate"
                    variant="standard"
                    onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
                />
                </Grid>
                <Grid item xs={12}  sm={6}>
                <TextField
                    required
                    id="rate"
                    name="rate"
                    label="Rate"
                    fullWidth
                    autoComplete="rate"
                    variant="standard"
                    onChange ={(field)=>{
                        onTextFieldChange(field);
                    }}
                />
                </Grid>

                <Grid item xs={12}  sm={6}>
                    <Button
                        onClick={()=>{
                            props.handleClose();
                        }}
                        sx={{ mt: 3, ml: 1 }}
                        >
                        Cancel
                        </Button>
                </Grid> 

                <Grid item xs={12}  sm={6}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={addTaxi}
                        sx={{ mt: 3, ml: 1 }}
                        >
                        Add
                        </Button>
                </Grid> 
            
            </Grid>
            </React.Fragment>
        </Box>
      </Modal>
    </div>
  );
}