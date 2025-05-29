import React , {useEffect, useRef} from 'react';
import '../styles/cursor.css';

const Cursor = () => {
    const dot = useRef(null);
    const dotFollow = useRef(null);

    const delay = 10; 
    const cursorVisible = useRef(true);
    const cursorEnlarged= useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const x = useRef(0);
    const y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        animateDotFollow();
        
        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);

            cancelAnimationFrame(requestRef.current);
        }
    }, []);

    const toggleCursorVisibility = () => {
        if(cursorVisible.current) {
            dot.current.style.opacity = 1;
            dotFollow.current.style.opacity = 1;
        }
        else {
            dot.current.style.opacity = 0;
            dotFollow.current.style.opacity = 0;
        }
    }

    const toggleCursorSize = () => {
        if(cursorEnlarged.current) {
            dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
            dotFollow.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }
        else {
            dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
            dotFollow.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    }

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    }

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    }

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    }
    
    const mouseMoveEvent = e => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;  
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
    }

    const animateDotFollow = e => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        x.current += (endX.current - x.current) / delay;
        y.current += (endY.current - y.current) / delay;
 
        dotFollow.current.style.top = y.current + 'px';
        dotFollow.current.style.left = x.current + 'px';

        requestRef.current = requestAnimationFrame(animateDotFollow);
    }

  return (
    <div>
        <div ref={dot} className="cursor-dot"></div>
        <div ref={dotFollow} className="cursor-dot-follow"></div>
    </div>
  )
}

export default Cursor;