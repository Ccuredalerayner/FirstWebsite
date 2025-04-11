
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import react, { useState } from 'react';

const HamburgerMenuOpen = () => {
    const [message, setMessage] = useState()
    const aboutMessage =
        <div className="p-4 white-space: pre-line">
            Stationery by The Guest List is a family-run business based in Cambridgeshire.
            We provide hand-made bespoke stationery for weddings and events, as well as personalized feature boards.
            <br></br><br></br>
            In a world of Instagram and Pinterest, it is easy to be inspired by all the creativity out there.
            Our goal is to help bring your inspiration and design dreams to fruition, to craft your perfect stationery as your personal designers.
            <br></br><br></br>
            This company has always been a dream of ours.
            Bespoke, high-end, glamourous stationery and feature bords tailored for you are our passion.
            We would love to take you on this design journey and give you the unique personalised wedding you deserve.
            <br></br><br></br>
            We are excited to hear from you,
            <br></br><br></br>
            Sarah & Harry
        </div>

    const termsAndConditionsMessage =
        <div className="p-4 white-space: pre-line">
            All products offered at Stationery by The Guest List are handmade and personalized to order.
            The design process of these products is highly personalized and so will incorporate communication between us and you.
            No design will be made without your express permission.
            The production of your order will only begin after express permission from you the buyer confirming the design and
            final payment.
            <br></br><br></br>
            Due to the personalized nature of our products returns are not possible.
            Any issues with the product delivered must be raised within 7 days of delivery.
        </div>

    const privacyMessage =
        <div className="p-4 white-space: pre-line">
            Stationery by The Guest List takes privacy very seriously. We do not sell or pass on your information to any external parties.
            The data and information provided are only used to produce and complete your order.
        </div>

    const returnsPolicyMessage =
        <div className="p-4 white-space: pre-line">
            All products produced are made to order and personalized, as a result, we are unable to accept returns or refunds.
            Should there be any problems with your order once you have received it please contact us via email within 7 days.
        </div>


    function displayMessage(message: any) {
        setMessage(message)
    }

    return (
        <>
            <div className="row text-center">
                <HamburgerMenu>
                    <Button isPressed={() => displayMessage(aboutMessage)}>
                        About
                    </Button>
                    <Button isPressed={() => displayMessage(termsAndConditionsMessage)}>
                        Terms and Conditions
                    </Button>
                    <Button isPressed={() => displayMessage(privacyMessage)}>
                        Privacy
                    </Button>
                    <Button isPressed={() => displayMessage(returnsPolicyMessage)}>
                        Returns Policy
                    </Button>
                </HamburgerMenu>
                {message}
            </div>
        </>
    );
};

export default HamburgerMenuOpen;