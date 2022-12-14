#!/usr/bin/env node
import { $ } from 'zx';

export default class TAKServerCert {
    static async root(server) {
        await $`cd /opt/tak/certs && ./makeRootCa.sh --ca-name ${server.stack}`;
    }

    static async gen(type, name) {
        await $`cd /opt/tak/certs && ./makeCert.sh ${type} ${name}`;
    }

    static async activate(name) {
        await $`java -jar /opt/tak/utils/UserManager.jar certmod -A /opt/tak/certs/files/${name}.pem`;
    }
}
