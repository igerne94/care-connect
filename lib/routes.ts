import { createRouteMatcher } from "@clerk/nextjs/server";

export const routeMatchers = {
    admin: createRouteMatcher([
        '/admin(.*)',
        '/patient(.*)',
        'record/users',
        '/record/doctors(.*)',
        '/record/patients',
        '/record/doctors',
        '/record/staffs',
    ]),
    patient: createRouteMatcher([
        '/patient(.*)',
        '/patient/registrations',
    ]),
    doctor: createRouteMatcher([
        '/doctor(.*)',
        '/record/doctors(.*)',
        '/record/patients',
        '/patienmts',
        '/record/staffs',
        '/record/patients',
    ]),
}