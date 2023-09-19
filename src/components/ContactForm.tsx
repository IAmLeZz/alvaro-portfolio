"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiUser, FiMail, FiBriefcase, FiPhone } from 'react-icons/fi';
import { BsFillSendFill } from 'react-icons/bs';
import { BASE_URL } from '@/utils/constants';

export const ContactForm = () => {
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        company: '',
        phone_number: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/messages/storeMessage`, {
            method: 'POST',
            body: JSON.stringify(formFields),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Ha ocurrido un error.');
            }
        });
        console.log(response);
    };

    return (
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg w-full md:w-[75%] lg:w-[50%] mb-5 relative z-10 animate__animated animate__fadeIn animate__duration-2s animate__delay-1s" id="contact">
            <h2 className="text-2xl font-semibold text-white mb-4">Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="name">
                        Nombre completo
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiUser />
                        </span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formFields.name}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="email">
                        Email
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiMail />
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formFields.email}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                            placeholder="Tu email"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="phone_number">
                        Teléfono
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiPhone />
                        </span>
                        <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            value={formFields.phone_number}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                            placeholder="Tu número de teléfono"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="company">
                        Compañía (opcional)
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiBriefcase />
                        </span>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formFields.company}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                            placeholder="Tu compañía"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-1" htmlFor="message">
                        Mensaje
                    </label>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formFields.message}
                            onChange={handleChange}
                            className="w-full p-5 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                            placeholder="Tu mensaje"
                            rows={4}
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center transition duration-300"
                >
                    Enviar <BsFillSendFill style={{ marginLeft: '0.5rem' }} />
                </button>
            </form>
        </section>
    );
};
