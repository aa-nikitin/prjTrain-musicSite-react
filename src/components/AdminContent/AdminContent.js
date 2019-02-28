import React from 'react';
import { AdminCounters } from '../AdminCounters';
import { AdminProducts } from '../AdminProducts';

const AdminContent = () => {
    return (
        <section className="admin-content">
            <div className="container admin-content__container">
                <div className="form-container">
                    <AdminCounters />
                    <AdminProducts />
                </div>
            </div>
        </section>
    );
};
export { AdminContent };
