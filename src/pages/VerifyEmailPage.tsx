import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [verificationState, setVerificationState] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setVerificationState('error');
        setErrorMessage('Verification token is missing');
        return;
      }

      try {
        // Replace with your actual API endpoint
        const response = await fetch('/auth/verify-email-actual', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          setVerificationState('success');
          // Redirect to login page after 3 seconds
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          const data = await response.json();
          throw new Error(data.message || 'Verification failed');
        }
      } catch (error) {
        setVerificationState('error');
        setErrorMessage(error instanceof Error ? error.message : 'Email verification failed. The link may be invalid or expired.');
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="w-full min-h-screen px-4 sm:px-section-px pt-12 sm:pt-section-py pb-8 sm:pb-section-py relative bg-background-main flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 bg-black rounded-[32px] sm:rounded-[64px] outline-4 outline-white backdrop-blur-[2px] overflow-hidden relative flex flex-col items-center justify-center text-center gap-6">
        {/* Decorative Blur */}
        <div className="w-1/2 h-1/2 right-0 bottom-0 absolute bg-red-600 blur-[300px]" />
        
        {/* Content */}
        <div className="relative z-10">
          {verificationState === 'verifying' && (
            <>
              <div style={{ fontFamily: 'Eras Demi ITC' }} className="text-white text-3xl sm:text-4xl font-normal leading-tight mb-4">
                Verifying Your Email
              </div>
              <p className="text-white/80 text-base sm:text-lg">
                Please wait while we verify your email address...
              </p>
            </>
          )}

          {verificationState === 'success' && (
            <>
              <div style={{ fontFamily: 'Eras Demi ITC' }} className="text-white text-3xl sm:text-4xl font-normal leading-tight mb-4">
                Email Verified!
              </div>
              <p className="text-white/80 text-base sm:text-lg">
                Your email has been successfully verified. Redirecting you to login...
              </p>
            </>
          )}

          {verificationState === 'error' && (
            <>
              <div style={{ fontFamily: 'Eras Demi ITC' }} className="text-white text-3xl sm:text-4xl font-normal leading-tight mb-4">
                Verification Failed
              </div>
              <p className="text-white/80 text-base sm:text-lg mb-6">
                {errorMessage}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/signup" 
                  className="px-6 py-3 bg-white rounded-full flex justify-center items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">
                    Back to Sign Up
                  </span>
                </a>
                <a 
                  href="/resend-verification" 
                  className="px-6 py-3 bg-white rounded-full flex justify-center items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">
                    Resend Verification
                  </span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
