import { useState } from "react";
import "./home.css";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="home-div " className="mt-4">
      <div className="">
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-8 row center-div">
            <div className="col-md-12">
              <h6 className="return">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left mr-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                {"   "} Go Back
              </h6>
            </div>

            <div className="col-md-12">
              <h1 className="heading">
                <svg
                  width="20"
                  height="16"
                  className="mr-4"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM10 8.45L1.5 2.875V14.5H18.5V2.875L10 8.45ZM10 6.95L18.4 1.5H1.625L10 6.95ZM1.5 2.875V1.5V14.5V2.875Z"
                    fill="#1C1C1C"
                  />
                </svg>
                Contact & Online Presence
              </h1>
            </div>

            <div className=" profile-details row">
              <div className="col-md-10">
                <h6>@ Email</h6>
                <span>utkarsh@gmail.com</span>
              </div>
              <div className="edit col-md-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className=" profile-details row">
              <div className="col-md-10">
                <h6>
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99967 14.0827C5.14412 14.0827 5.26356 14.0355 5.35801 13.941C5.45245 13.8466 5.49967 13.7271 5.49967 13.5827C5.49967 13.4382 5.45245 13.3188 5.35801 13.2243C5.26356 13.1299 5.14412 13.0827 4.99967 13.0827C4.85523 13.0827 4.73579 13.1299 4.64134 13.2243C4.5469 13.3188 4.49967 13.4382 4.49967 13.5827C4.49967 13.7271 4.5469 13.8466 4.64134 13.941C4.73579 14.0355 4.85523 14.0827 4.99967 14.0827ZM1.33301 11.8327H8.66634V3.16602H1.33301V11.8327ZM1.33301 15.3327C1.06634 15.3327 0.833008 15.2327 0.633008 15.0327C0.433008 14.8327 0.333008 14.5993 0.333008 14.3327V1.66602C0.333008 1.39935 0.433008 1.16602 0.633008 0.966016C0.833008 0.766016 1.06634 0.666016 1.33301 0.666016H8.66634C8.93301 0.666016 9.16634 0.766016 9.36634 0.966016C9.56634 1.16602 9.66634 1.39935 9.66634 1.66602V14.3327C9.66634 14.5993 9.56634 14.8327 9.36634 15.0327C9.16634 15.2327 8.93301 15.3327 8.66634 15.3327H1.33301ZM1.33301 2.16602H8.66634V1.66602H1.33301V2.16602ZM1.33301 1.66602V2.16602V1.66602ZM1.33301 12.8327V14.3327H8.66634V12.8327H1.33301ZM1.33301 14.3327V12.8327V14.3327Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                  Phone
                </h6>
                <span>+91 9876543210</span>
              </div>
              <div className="edit col-md-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className=" profile-details row">
              <div className="col-md-10">
                <h6>
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10.034C6.15556 9.10065 7.02778 8.20343 7.61667 7.34232C8.20556 6.48121 8.5 5.67843 8.5 4.93398C8.5 4.27843 8.38056 3.72287 8.14167 3.26732C7.90278 2.81176 7.60833 2.43954 7.25833 2.15065C6.90833 1.86176 6.52778 1.65343 6.11667 1.52565C5.70556 1.39787 5.33333 1.33398 5 1.33398C4.66667 1.33398 4.29444 1.39787 3.88333 1.52565C3.47222 1.65343 3.09167 1.86176 2.74167 2.15065C2.39167 2.43954 2.09722 2.81176 1.85833 3.26732C1.61944 3.72287 1.5 4.27843 1.5 4.93398C1.5 5.67843 1.79444 6.48121 2.38333 7.34232C2.97222 8.20343 3.84444 9.10065 5 10.034ZM5 11.3007C3.47778 10.1562 2.34722 9.06176 1.60833 8.01732C0.869444 6.97287 0.5 5.9451 0.5 4.93398C0.5 4.17843 0.636111 3.51454 0.908333 2.94232C1.18056 2.3701 1.53333 1.88954 1.96667 1.50065C2.4 1.11176 2.88333 0.820095 3.41667 0.625651C3.95 0.431207 4.47778 0.333984 5 0.333984C5.52222 0.333984 6.05 0.431207 6.58333 0.625651C7.11667 0.820095 7.6 1.11176 8.03333 1.50065C8.46667 1.88954 8.81945 2.3701 9.09167 2.94232C9.36389 3.51454 9.5 4.17843 9.5 4.93398C9.5 5.9451 9.13056 6.97287 8.39167 8.01732C7.65278 9.06176 6.52222 10.1562 5 11.3007ZM5 6.00065C5.32222 6.00065 5.59722 5.88676 5.825 5.65898C6.05278 5.43121 6.16667 5.15621 6.16667 4.83398C6.16667 4.51176 6.05278 4.23676 5.825 4.00898C5.59722 3.78121 5.32222 3.66732 5 3.66732C4.67778 3.66732 4.40278 3.78121 4.175 4.00898C3.94722 4.23676 3.83333 4.51176 3.83333 4.83398C3.83333 5.15621 3.94722 5.43121 4.175 5.65898C4.40278 5.88676 4.67778 6.00065 5 6.00065ZM0.5 13.6673V12.6673H9.5V13.6673H0.5Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                  Current Location
                </h6>
                <span>India</span>
              </div>
              <div className="edit col-md-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className=" container profile-info ">
              <div className="row profile-desc">
                <div className=" col-md-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7143 0H1.2817C0.574553 0 0 0.582589 0 1.29777V16.7022C0 17.4174 0.574553 18 1.2817 18H16.7143C17.4214 18 18 17.4174 18 16.7022V1.29777C18 0.582589 17.4214 0 16.7143 0ZM5.44018 15.4286H2.77232V6.83839H5.4442V15.4286H5.44018ZM4.10625 5.66518C3.25045 5.66518 2.55937 4.97009 2.55937 4.1183C2.55937 3.26652 3.25045 2.57143 4.10625 2.57143C4.95803 2.57143 5.65312 3.26652 5.65312 4.1183C5.65312 4.97411 4.96205 5.66518 4.10625 5.66518ZM15.4406 15.4286H12.7728V11.25C12.7728 10.2536 12.7527 8.97187 11.3866 8.97187C9.99643 8.97187 9.78348 10.0567 9.78348 11.1777V15.4286H7.11562V6.83839H9.675V8.01161H9.71116C10.0687 7.33661 10.9406 6.62545 12.2384 6.62545C14.9384 6.62545 15.4406 8.40536 15.4406 10.7196V15.4286Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </div>
                <div className="col-md-10">
                  <h6>Linkedin</h6>
                  <span>linkedin.com/userprofile/234904924</span>
                </div>
                <div className="edit col-md-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="row profile-desc">
                <div className=" col-md-1">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37533 9.16732H4.83366C3.6531 9.16732 2.66352 8.76801 1.86491 7.9694C1.0663 7.17079 0.666992 6.18121 0.666992 5.00065C0.666992 3.8201 1.0663 2.83051 1.86491 2.0319C2.66352 1.23329 3.6531 0.833984 4.83366 0.833984H8.37533V2.08398H4.83366C4.00033 2.08398 3.30588 2.36176 2.75033 2.91732C2.19477 3.47287 1.91699 4.16732 1.91699 5.00065C1.91699 5.83398 2.19477 6.52843 2.75033 7.08398C3.30588 7.63954 4.00033 7.91732 4.83366 7.91732H8.37533V9.16732ZM5.77116 5.62565V4.37565H12.2295V5.62565H5.77116ZM9.62533 9.16732V7.91732H13.167C14.0003 7.91732 14.6948 7.63954 15.2503 7.08398C15.8059 6.52843 16.0837 5.83398 16.0837 5.00065C16.0837 4.16732 15.8059 3.47287 15.2503 2.91732C14.6948 2.36176 14.0003 2.08398 13.167 2.08398H9.62533V0.833984H13.167C14.3475 0.833984 15.3371 1.23329 16.1357 2.0319C16.9344 2.83051 17.3337 3.8201 17.3337 5.00065C17.3337 6.18121 16.9344 7.17079 16.1357 7.9694C15.3371 8.76801 14.3475 9.16732 13.167 9.16732H9.62533Z" fill="#1C1C1C"/>
</svg>

                </div>
                <div className="col-md-10">
                  <h6>My Stack Profile</h6>
                  <span>behance.net/user849y92</span>
                </div>
                <div className=" edit col-md-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="row profile-desc">
                <div className=" col-md-1">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37533 9.16732H4.83366C3.6531 9.16732 2.66352 8.76801 1.86491 7.9694C1.0663 7.17079 0.666992 6.18121 0.666992 5.00065C0.666992 3.8201 1.0663 2.83051 1.86491 2.0319C2.66352 1.23329 3.6531 0.833984 4.83366 0.833984H8.37533V2.08398H4.83366C4.00033 2.08398 3.30588 2.36176 2.75033 2.91732C2.19477 3.47287 1.91699 4.16732 1.91699 5.00065C1.91699 5.83398 2.19477 6.52843 2.75033 7.08398C3.30588 7.63954 4.00033 7.91732 4.83366 7.91732H8.37533V9.16732ZM5.77116 5.62565V4.37565H12.2295V5.62565H5.77116ZM9.62533 9.16732V7.91732H13.167C14.0003 7.91732 14.6948 7.63954 15.2503 7.08398C15.8059 6.52843 16.0837 5.83398 16.0837 5.00065C16.0837 4.16732 15.8059 3.47287 15.2503 2.91732C14.6948 2.36176 14.0003 2.08398 13.167 2.08398H9.62533V0.833984H13.167C14.3475 0.833984 15.3371 1.23329 16.1357 2.0319C16.9344 2.83051 17.3337 3.8201 17.3337 5.00065C17.3337 6.18121 16.9344 7.17079 16.1357 7.9694C15.3371 8.76801 14.3475 9.16732 13.167 9.16732H9.62533Z" fill="#1C1C1C"/>
</svg>

                </div>
                <div className="col-md-10">
                  <h6>Website</h6>
                  <span>domain.xyz/user849y92</span>
                </div>
                <div className="edit col-md-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="row profile-desc">
                <div className=" col-md-1">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37533 9.16732H4.83366C3.6531 9.16732 2.66352 8.76801 1.86491 7.9694C1.0663 7.17079 0.666992 6.18121 0.666992 5.00065C0.666992 3.8201 1.0663 2.83051 1.86491 2.0319C2.66352 1.23329 3.6531 0.833984 4.83366 0.833984H8.37533V2.08398H4.83366C4.00033 2.08398 3.30588 2.36176 2.75033 2.91732C2.19477 3.47287 1.91699 4.16732 1.91699 5.00065C1.91699 5.83398 2.19477 6.52843 2.75033 7.08398C3.30588 7.63954 4.00033 7.91732 4.83366 7.91732H8.37533V9.16732ZM5.77116 5.62565V4.37565H12.2295V5.62565H5.77116ZM9.62533 9.16732V7.91732H13.167C14.0003 7.91732 14.6948 7.63954 15.2503 7.08398C15.8059 6.52843 16.0837 5.83398 16.0837 5.00065C16.0837 4.16732 15.8059 3.47287 15.2503 2.91732C14.6948 2.36176 14.0003 2.08398 13.167 2.08398H9.62533V0.833984H13.167C14.3475 0.833984 15.3371 1.23329 16.1357 2.0319C16.9344 2.83051 17.3337 3.8201 17.3337 5.00065C17.3337 6.18121 16.9344 7.17079 16.1357 7.9694C15.3371 8.76801 14.3475 9.16732 13.167 9.16732H9.62533Z" fill="#1C1C1C"/>
</svg>

                </div>
                <div className="col-md-10">
                  <h6>Website</h6>
                  <span>domain.xyz/user849y92</span>
                </div>
                <div className="edit col-md-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.2499 15.7499H3.2399L13.2074 5.78242L12.2174 4.79242L2.2499 14.7599V15.7499ZM16.0649 4.81492L13.1849 1.93492L14.1299 0.989922C14.3849 0.734922 14.6999 0.607422 15.0749 0.607422C15.4499 0.607422 15.7649 0.734922 16.0199 0.989922L17.0099 1.97992C17.2649 2.23492 17.3924 2.54992 17.3924 2.92492C17.3924 3.29992 17.2649 3.61492 17.0099 3.86992L16.0649 4.81492ZM15.1199 5.75992L3.7799 17.0999H0.899902V14.2199L12.2399 2.87992L15.1199 5.75992ZM12.7124 5.28742L12.2174 4.79242L13.2074 5.78242L12.7124 5.28742Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className=" mt-4 row profile-ratio">
              <div className="col-8">
              <h6>65%</h6>
              <span> Profile Updated </span>
              </div>
              <div className="col-4">
                <span className="piechart">

                </span>

              </div>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
