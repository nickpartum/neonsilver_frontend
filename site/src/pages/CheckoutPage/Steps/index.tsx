import React, {FC, useState} from "react"
import {Button, Step, StepContent, StepLabel, Stepper} from '@mui/material';
import {} from "@mui/icons-material";
import CostumerBaseInfo from "./CostumerBaseInfo";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";

interface ICProps {

}

const Steps: FC<ICProps> = (props) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Stepper activeStep={activeStep} orientation={'vertical'}>
            <Step>
                <StepLabel>Данні клієнта</StepLabel>
                <StepContent>
                    <CostumerBaseInfo/>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{mt: 1, mr: 1}}
                    >
                        Continue
                    </Button>
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Данні доставки</StepLabel>
                <StepContent>
                    <DeliveryInfo/>
                    <Button
                        onClick={handleBack}
                        sx={{mt: 1, mr: 1}}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{mt: 1, mr: 1}}
                    >
                        Continue
                    </Button>
                </StepContent>
            </Step>
            <Step>
                <StepLabel>Данні Оплати</StepLabel>
                <StepContent>
                    <PaymentInfo/>
                    <Button
                        onClick={handleBack}
                        sx={{mt: 1, mr: 1}}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{mt: 1, mr: 1}}
                    >
                        Continue
                    </Button>
                </StepContent>
            </Step>
        </Stepper>
    )
}

export default Steps