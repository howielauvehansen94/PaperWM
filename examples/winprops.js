const Extension = imports.misc.extensionUtils.getCurrentExtension();
const defwinprop = Extension.imports.tiling.defwinprop;

defwinprop({
    wm_class: "copyq",
    scratch_layer: true,
});

defwinprop({
    wm_class: "Riot",
    oneshot: true, // Allow reattaching
    scratch_layer: true,
});

// Fix rofi in normal window mode (eg. in Wayland)
defwinprop({
    wm_class: "Rofi",
    focus: true,
});

// Keep firefox's picture-in-picture window floating above the tiling,
// in the bottom right corner of the monitor
defwinprop({
    title: "Picture-in-Picture",
    float: true,
    x: "right-20px",
    y: "bottom-20px",
});
