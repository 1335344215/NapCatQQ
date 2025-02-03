import { require_dlopen } from '.';
export function pty_loader() {
    let pty: any;
    try {
        pty = require_dlopen('./pty/' + process.platform + '.' + process.arch + '/pty.node');
    } catch (outerError) {
        pty = undefined;
    }
    return pty;
};
