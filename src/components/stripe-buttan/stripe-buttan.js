import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
    return (
        <StripeCheckout
            name="Three Comma Co."
            description="Big Data Stuff"
            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
            ComponentClass="div"
            panelLabel="Pay Now"
            amount={price * 100}
            currency="USD"
            stripeKey="pk_test_51MSa78KocYczcRmyAGr7Q0fSALI8sxt4Wzki5EbjXOONjrOdwqWp5Clg36Ac7nIY2e5aw6zFHdDXu7b8j9ZkwvUz00Kpo0Q9ky"
            locale="en"
            email="info@vidhub.co"
            shippingAddress
            billingAddress={false}
            zipCode={false}
            allowRememberMe
            token={(token) => {
                console.log(token, 'token');
                alert('Payment Succesful');
            }}
            reconfigureOnUpdate={false}
        // triggerEvent="onTouchTap"
        >
            <button className="btn btn-primary">
                Pay Now
            </button>
        </StripeCheckout>

    );
}