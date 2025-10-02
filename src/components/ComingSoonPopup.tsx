import type { FC } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ComingSoonPopupProps {
    open: boolean;
    onClose: () => void;
}

const ComingSoonPopup: FC<ComingSoonPopupProps> = ({ open, onClose }) => {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
        }
        if (open) document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;

    const modal = (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
            <div className="relative bg-white rounded-xl shadow-lg max-w-xs w-full p-6 z-50 text-center">
                <h3 className="text-lg text-black font-semibold">Coming soon</h3>
                <div className="mt-4 flex justify-center">
                    <button
                        className="px-4 py-2 bg-black text-white rounded-md"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );

    if (typeof document === 'undefined') return modal;
    return createPortal(modal, document.body);
};

export default ComingSoonPopup;


