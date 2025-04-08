<script>
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY; // Get the vertical scroll position
        const zoomLevel = 59 + scrollPosition * 0.1; // Adjust zoom level (tweak multiplier as needed)
        document.body.style.backgroundSize = `${zoomLevel}%`; // Apply zoom effect
    });
</script>