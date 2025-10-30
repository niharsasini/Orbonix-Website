import { useState } from 'react';

const EnquiryForm = ({ hotelName, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        email: '',
        dateOfBooking: '',
        numberOfPersons: '',
        numberOfDays: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Add hotel name to the form data
        const enquiryData = {
            ...formData,
            hotelName,
            dateSubmitted: new Date().toISOString()
        };

        try {
            // This is a mock email sending function
            // In a real app, you would call your backend API endpoint
            // Something like: await fetch('/api/send-enquiry', { method: 'POST', body: JSON.stringify(enquiryData) })

            // For demo purposes, we'll simulate a delay and success
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock email sending success
            console.log('Enquiry sent:', enquiryData);
            setSubmitStatus({ success: true, message: 'Your enquiry has been sent successfully!' });

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    name: '',
                    contactNo: '',
                    email: '',
                    dateOfBooking: '',
                    numberOfPersons: '',
                    numberOfDays: '',
                });
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Error sending enquiry:', error);
            setSubmitStatus({ success: false, message: 'Failed to send enquiry. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Send Enquiry</h2>
                <p className="text-gray-600 mb-4 text-center">LazyStay {hotelName}</p>

                {submitStatus && (
                    <div className={`p-3 mb-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="contactNo" className="block text-gray-700 mb-1">Contact Number</label>
                        <input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="dateOfBooking" className="block text-gray-700 mb-1">Date of Booking</label>
                        <input
                            type="date"
                            id="dateOfBooking"
                            name="dateOfBooking"
                            min={today}
                            value={formData.dateOfBooking}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="numberOfPersons" className="block text-gray-700 mb-1">Number of Persons</label>
                            <input
                                type="number"
                                id="numberOfPersons"
                                name="numberOfPersons"
                                value={formData.numberOfPersons}
                                onChange={handleChange}
                                min="1"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="numberOfDays" className="block text-gray-700 mb-1">Number of Days</label>
                            <input
                                type="number"
                                id="numberOfDays"
                                name="numberOfDays"
                                value={formData.numberOfDays}
                                onChange={handleChange}
                                min="1"
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 rounded font-medium ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-900 hover:bg-blue-800 text-white'
                            } transition duration-300`}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
