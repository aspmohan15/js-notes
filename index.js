
const StyleVideoUI = () => {
    const customVideoRef = useRef(null);
    const [progress, setProgress] = useState(0);
    useEffect(() => {

        const video = customVideoRef.current;
        const updateProgress = () => {
            const current = video.currentTime;
            const { duration } = video;
            const percent = (current / duration) * 100;
            setProgress(percent);
        };

        video.addEventListener('timeupdate', updateProgress);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
        };
    }, []);


    return <div className={styles.statusContainer}>
        <video ref={customVideoRef} src={videoUrl} autoPlay muted playsInline className={styles.video} loop />

        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>
    </div>

}
