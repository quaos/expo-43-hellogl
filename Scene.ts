export default class GLScene {
    gl: WebGLRenderingContext;
    glProgram: WebGLProgram;

    constructor(gl: WebGLRenderingContext) {
        this.gl = gl;
        this.glProgram = gl.createProgram()!;
    }

    init() {
        //TODO: Shaders & params
        requestAnimationFrame(() => this.render());
    }

    cleanup() {
        this.gl.deleteProgram(this.glProgram);
    }

    render() {
        const { gl } = this;
        
        gl.clearColor(0, 0, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        requestAnimationFrame(() => this.render());
    }
}