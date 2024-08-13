import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function AddItems(){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            image: '',
            name: '',
            price: '',
            veg__non_veg: '',
            size: '',
            ingredients: '',
            cheese: '',
            description: ''
        },

        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                    .min(5, 'Name must be at least 5 characters')
                    .required('Name is required'),
            price: Yup.number()
                    .min(1, 'Price must be greater than 0')
                    .required('Price is required'),
            veg__non_veg: Yup.string().required('Veg or Non-Veg is required'),
            size: Yup.string().required('Small, Medium, Large, or Extra Large'),
            ingredients: Yup.string().required('Please enter some ingredients'),
            cheese: Yup.string().required('Cheese level is required'),
            description: Yup.string(),
        }),

        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.post('http://localhost:5000/displayitems', values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/displayitems');
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className="container mt-4">
            <h2>Add New Items</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <div className="text-danger">{formik.errors.image}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-danger">{formik.errors.price}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="veg__non_veg" className="form-label">Veg / Non Veg</label>
                    <input
                        id="veg__non_veg"
                        name="veg__non_veg"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.veg__non_veg}
                    />
                    {formik.touched.veg__non_veg && formik.errors.veg__non_veg ? (
                        <div className="text-danger">{formik.errors.veg__non_veg}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size</label>
                    <input
                        id="size"
                        name="size"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.size}
                    />
                    {formik.touched.size && formik.errors.size ? (
                        <div className="text-danger">{formik.errors.size}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label">Ingredients</label>
                    <input
                        id="ingredients"
                        name="ingredients"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ingredients}
                    />
                    {formik.touched.ingredients && formik.errors.ingredients ? (
                        <div className="text-danger">{formik.errors.ingredients}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="cheese" className="form-label">Cheese</label>
                    <input
                        id="cheese"
                        name="cheese"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cheese}
                    />
                    {formik.touched.cheese && formik.errors.cheese ? (
                        <div className="text-danger">{formik.errors.cheese}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-danger">{formik.errors.description}</div>
                    ) : null}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddItems;
