'use client';
import { useState } from 'react';

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });
    const [formData, setFormData] = useState({ name: '', phone: '', sede: '' });

    const openCheckout = (name: string, price: string) => {
        setSelectedPlan({ name, price });
        setIsModalOpen(true);
        if (typeof window !== 'undefined') {
            document.body.style.overflow = "hidden";
        }
    };

    const closeCheckout = () => {
        setIsModalOpen(false);
        if (typeof window !== 'undefined') {
            document.body.style.overflow = "auto";
        }
    };

    const processCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `¡Hola Escuela Futuro! 🚗💨%0A%0AVengo desde la página web y quiero gestionar mi matrícula.%0A%0A*DATOS DEL ALUMNO:*%0A👤 Nombre: ${formData.name}%0A📱 Teléfono: ${formData.phone}%0A📍 Sede elegida: ${formData.sede}%0A%0A*DETALLE DE INTERÉS:*%0A📌 Plan: ${selectedPlan.name}%0A💰 Valor: ${selectedPlan.price}%0A%0A¿Me pueden ayudar con los pasos a seguir para mi inscripción?`;
        const whatsappNumber = "56942051897"; 
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        closeCheckout();
        setFormData({ name: '', phone: '', sede: '' });
    };

    return (
        <>
            <section id="planes" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-b from-yellow-100 to-transparent blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-yellow-500 font-black tracking-widest uppercase text-sm mb-2 block">Matrículas Abiertas</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic">Elige tu Plan de Conducción</h2>
                        <div className="h-1.5 w-24 bg-yellow-400 mx-auto mt-6"></div>
                        <p className="mt-6 text-slate-500 font-bold max-w-xl mx-auto text-lg">Inicia tu proceso de compra aquí. Te guiamos paso a paso hasta que apruebes el examen.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                        
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
                            <div className="p-10">
                                <h3 className="text-2xl font-black text-slate-900 uppercase italic">Curso Intensivo</h3>
                                <p className="text-slate-500 text-sm font-bold mt-3 h-12">Mismo programa integral, diseñado exclusivamente para Sábados y Domingos.</p>
                                <div className="text-5xl font-black my-8 text-slate-900">$170.000</div>
                                <ul className="space-y-4 text-sm font-bold text-slate-600 mb-10 border-t border-slate-100 pt-8">
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-calendar-days text-blue-500 mt-1 text-lg"></i> <span>Horario de Fin de Semana</span></li>
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-check text-green-500 mt-1 text-lg"></i> <span>Mismo contenido que el semanal</span></li>
                                </ul>
                            </div>
                            <div className="p-8 bg-slate-50 border-t border-slate-100 mt-auto">
                                <button onClick={() => openCheckout('Curso Intensivo', '$170.000')} className="w-full text-center font-black uppercase tracking-widest text-sm text-slate-700 bg-white border-2 border-slate-200 py-4 rounded-xl hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                                    Consultar Disponibilidad
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border-4 border-yellow-400 transform lg:-translate-y-8 z-20">
                            <div className="bg-yellow-400 text-slate-900 text-center font-black text-xs py-3 uppercase tracking-widest flex justify-center items-center gap-2">
                                <i className="fa-solid fa-star"></i> Programa Completo (Tríptico) <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="p-10 text-white">
                                <h3 className="text-4xl font-black uppercase italic">Clase B</h3>
                                <p className="text-slate-300 text-sm font-bold mt-3 h-12">Curso de 25 días. Formación integral teórica y práctica individual.</p>
                                
                                <div className="mt-8 flex flex-col">
                                    <div className="flex items-end gap-3 mt-1">
                                        <span className="text-6xl font-black text-yellow-400">$170.000</span>
                                        <span className="text-slate-400 font-bold mb-2">Contado</span>
                                    </div>
                                </div>

                                <ul className="space-y-5 text-sm font-bold text-slate-200 mb-10 mt-10 border-t border-slate-700 pt-8">
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-yellow-400 mt-1 text-xl"></i> <span><strong>3 días</strong> de Máquinas y Mecánica</span></li>
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-yellow-400 mt-1 text-xl"></i> <span><strong>8 días</strong> de Legislación y Psicología</span></li>
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-yellow-400 mt-1 text-xl"></i> <span><strong>14 clases</strong> de 45 min de manejo individual</span></li>
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-circle-check text-yellow-400 mt-1 text-xl"></i> <span><strong>Auto de la escuela</strong> para examen municipal</span></li>
                                </ul>
                            </div>
                            <div className="p-8 bg-slate-800 border-t border-slate-700 mt-auto">
                                <button onClick={() => openCheckout('Curso Clase B', '$170.000')} className="w-full text-center bg-yellow-400 text-slate-900 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                                    Inscribirme Ahora
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
                            <div className="p-10">
                                <h3 className="text-2xl font-black text-slate-900 uppercase italic">Profesional</h3>
                                <p className="text-slate-500 text-sm font-bold mt-3 h-12">Licencias para transporte de personas y carga pesada.</p>
                                <div className="text-4xl font-black my-8 text-slate-900 italic">A2 - A3 - A4</div>
                                <ul className="space-y-4 text-sm font-bold text-slate-600 mb-10 border-t border-slate-100 pt-8">
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-truck-moving text-slate-400 mt-1 text-lg"></i> <span>Cursos especializados por clase</span></li>
                                    <li className="flex items-start gap-3"><i className="fa-solid fa-check text-green-500 mt-1 text-lg"></i> <span>Legislación profesional incluida</span></li>
                                </ul>
                            </div>
                            <div className="p-8 bg-slate-50 border-t border-slate-100 mt-auto">
                                <button onClick={() => openCheckout('Curso Profesional (A2/A3/A4)', 'Consultar Valor')} className="w-full text-center font-black uppercase tracking-widest text-sm text-slate-700 bg-white border-2 border-slate-200 py-4 rounded-xl hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                                    Consultar Valores
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
                    <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative transform transition-transform duration-300">
                        
                        <div className="bg-slate-900 p-8 text-white relative">
                            <button onClick={closeCheckout} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>
                            <div className="flex items-center gap-3 mb-2">
                                <i className="fa-solid fa-lock text-yellow-400"></i>
                                <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Reserva Segura</span>
                            </div>
                            <h3 className="text-3xl font-black italic uppercase">Completar Matrícula</h3>
                            <p className="text-sm text-slate-400 mt-2 font-bold">Ingresa tus datos para generar tu orden de ingreso a la escuela.</p>
                        </div>

                        <div className="p-8">
                            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex justify-between items-center shadow-inner">
                                <div>
                                    <span className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-1">Plan Seleccionado</span>
                                    <span className="font-black text-slate-900 text-lg italic uppercase">{selectedPlan.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-1">Total a Pagar</span>
                                    <span className="font-black text-slate-900 text-2xl">{selectedPlan.price}</span>
                                </div>
                            </div>

                            <form onSubmit={processCheckout} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Nombre Completo del Alumno</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <i className="fa-regular fa-user text-slate-400"></i>
                                        </div>
                                        <input 
                                            type="text" 
                                            required 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" 
                                            placeholder="Ej: Juan Pérez" 
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">WhatsApp</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <i className="fa-brands fa-whatsapp text-slate-400"></i>
                                            </div>
                                            <input 
                                                type="tel" 
                                                required 
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all" 
                                                placeholder="+56 9..." 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">Sede de Interés</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <i className="fa-solid fa-location-dot text-slate-400"></i>
                                            </div>
                                            <select 
                                                required 
                                                value={formData.sede}
                                                onChange={(e) => setFormData({...formData, sede: e.target.value})}
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all appearance-none"
                                            >
                                                <option value="" disabled>Selecciona...</option>
                                                <option value="Sede Macul">Sede Macul</option>
                                                <option value="Sede Peñalolén">Sede Peñalolén</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <i className="fa-solid fa-chevron-down text-slate-400 text-xs"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white font-black py-4 rounded-xl uppercase tracking-widest text-sm transition-all duration-300 flex justify-center items-center gap-3 shadow-lg shadow-green-500/30">
                                        Continuar a WhatsApp <i className="fa-brands fa-whatsapp text-xl"></i>
                                    </button>
                                    <p className="text-center text-xs text-slate-400 font-bold mt-4">
                                        <i className="fa-solid fa-shield-halved mr-1"></i> Tu información será enviada directamente a nuestros asesores.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
