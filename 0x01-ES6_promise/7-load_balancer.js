export default function loadBalancer(chunaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
