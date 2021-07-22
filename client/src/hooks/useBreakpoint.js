import React from 'react';


const useBreakpoint = () => {

    const [breakpoint, setBreakpoint] = React.useState('md')
    const [size, setSize]=React.useState(window.innerWidth);
    const handleResize = () => {
        setSize(window.innerWidth)
        const bp = calculateBreakpoint(window.innerWidth)
        setBreakpoint(bp);
    }
    const calculateBreakpoint = (innerWidth) => {
  
        if(innerWidth < 480) {
            return 'xs'
        }
        if(innerWidth < 768) {
            return 'sm'
        }
        if(innerWidth < 992) {
            return 'md'
        }
        if(innerWidth < 1200) {
            return 'lg'
        }
    }
    React.useEffect(()=>{
        const innerWidth = window.innerWidth
        window.addEventListener("resize", handleResize);
     
        setBreakpoint(calculateBreakpoint(innerWidth));
    
    }, [size])
    return breakpoint;
}
export default useBreakpoint;