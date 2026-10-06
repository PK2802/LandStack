import React, { useState } from 'react';
import { X, Globe, Copy, Check, ExternalLink } from 'lucide-react';

interface CustomDomainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomDomainModal: React.FC<CustomDomainModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-slate-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-navy-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                Custom Domain Configuration Guide
              </h3>
              <p className="text-[11px] text-slate-300">
                Binding Institutional Domain (landstack.gov.in / custom domain)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-navy-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 overflow-y-auto text-xs text-slate-700">
          <div>
            <h4 className="font-bold text-navy-900 text-xs mb-1">
              Statutory Domain Binding Protocol (NIC / Cloudflare / Vercel)
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              To host Bhu-Setu under an official government domain (such as <code>landstack.gov.in</code> or <code>bhu-setu.dolr.gov.in</code>) or a custom domain, configure the authoritative DNS records in your domain registrar according to the specification below.
            </p>
          </div>

          {/* DNS Records Table */}
          <div className="border border-slate-200 rounded-sm overflow-hidden">
            <div className="bg-slate-100 px-3 py-2 font-semibold text-navy-900 text-xs flex items-center justify-between">
              <span>Required DNS Records</span>
              <span className="text-[10px] text-slate-500 font-mono">TTL: 3600 (Automatic)</span>
            </div>
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[11px]">
                <tr>
                  <th className="p-2.5">Type</th>
                  <th className="p-2.5">Host / Name</th>
                  <th className="p-2.5">Target Value / Destination</th>
                  <th className="p-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
                <tr>
                  <td className="p-2.5 font-bold text-navy-900">CNAME</td>
                  <td className="p-2.5">landstack.gov.in</td>
                  <td className="p-2.5 text-slate-700">cname.vercel-dns.com</td>
                  <td className="p-2.5 text-right">
                    <button
                      onClick={() => handleCopy('cname.vercel-dns.com', 'cname')}
                      className="text-navy-800 hover:text-navy-950 font-sans text-xs underline inline-flex items-center"
                    >
                      {copiedKey === 'cname' ? <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                      Copy
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-navy-900">A</td>
                  <td className="p-2.5">@ (Apex)</td>
                  <td className="p-2.5 text-slate-700">76.76.21.21</td>
                  <td className="p-2.5 text-right">
                    <button
                      onClick={() => handleCopy('76.76.21.21', 'a-record')}
                      className="text-navy-800 hover:text-navy-950 font-sans text-xs underline inline-flex items-center"
                    >
                      {copiedKey === 'a-record' ? <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                      Copy
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-navy-900">TXT</td>
                  <td className="p-2.5">_challenge.landstack.gov.in</td>
                  <td className="p-2.5 text-slate-700">vc-domain-verify=landstack-2026-ind</td>
                  <td className="p-2.5 text-right">
                    <button
                      onClick={() => handleCopy('vc-domain-verify=landstack-2026-ind', 'txt')}
                      className="text-navy-800 hover:text-navy-950 font-sans text-xs underline inline-flex items-center"
                    >
                      {copiedKey === 'txt' ? <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                      Copy
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Setup Instructions by Platform */}
          <div className="space-y-3">
            <h5 className="font-bold text-navy-900 text-xs">Step-by-Step Deployment Instructions:</h5>

            {/* Option 1: Vercel */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
              <div className="font-semibold text-navy-900 flex items-center justify-between">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mr-1.5"></span>
                  Option A: Direct Vercel / Cloudflare Deployment
                </span>
                <a
                  href="https://vercel.com/docs/projects/domains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline flex items-center space-x-1 text-[10px]"
                >
                  <span>Vercel DNS Docs</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <p className="text-[11px] text-slate-600">
                1. Navigate to <strong>Project Settings → Domains</strong> in your Vercel or Cloudflare Pages dashboard.<br/>
                2. Enter <code>landstack.gov.in</code> (or your custom domain name) and click <strong>Add</strong>.<br/>
                3. Add the DNS records shown above in your authoritative nameserver (NIC / GoDaddy / Cloudflare).<br/>
                4. TLS certificates (Let's Encrypt / DigiCert) will auto-generate within 10 minutes.
              </p>
            </div>

            {/* Option 2: NGINX / Sovereign Datacenter */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
              <div className="font-semibold text-navy-900 flex items-center justify-between">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mr-1.5"></span>
                  Option B: National Informatics Centre (NIC) / Sovereign Cloud
                </span>
                <a
                  href="https://cloud.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline flex items-center space-x-1 text-[10px]"
                >
                  <span>NIC MeghRaj Cloud</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <p className="text-[11px] text-slate-600 font-mono bg-white p-2 border border-slate-200 rounded-xs mt-1">
{`server {
    listen 443 ssl http2;
    server_name landstack.gov.in;
    ssl_certificate /etc/ssl/certs/landstack.crt;
    ssl_certificate_key /etc/ssl/private/landstack.key;
    location / {
        root /var/www/landstack/dist;
        try_files $uri $uri/ /index.html;
    }
}`}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-sm text-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
