"use client";

import React, { useState, useEffect } from 'react';

const slides = [
  // SLIDE 1: Title
  {
    id: 1,
    type: 'title',
    content: (
      <div style={{ textAlign: 'center', padding: '0 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '12px 28px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '20px', marginBottom: '48px' }}>
          <div style={{ width: '52px', height: '52px', background: '#F59E0B', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#0F172A', fontSize: '42px', fontWeight: 900, letterSpacing: '-3px' }}>C</span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px' }}>CBX</div>
            <div style={{ fontSize: '10px', color: '#F59E0B', letterSpacing: '4px', marginTop: '-2px' }}>CENTRAL BUSINESS EXCHANGE</div>
          </div>
        </div>
        
        <div style={{ fontSize: '92px', fontWeight: 800, letterSpacing: '-5px', lineHeight: 0.95, marginBottom: '16px' }}>中商匯</div>
        <div style={{ fontSize: '32px', color: '#94A3B8', fontWeight: 300, letterSpacing: '-0.5px', marginBottom: '56px' }}>Central Business Exchange</div>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '18px 42px', borderRadius: '20px' }}>
          <span style={{ fontSize: '26px', color: '#F59E0B', fontWeight: 600 }}>合作無界</span>
          <span style={{ color: '#475569', fontSize: '22px' }}>·</span>
          <span style={{ fontSize: '26px', fontWeight: 300 }}>共創未來</span>
        </div>
        
        <div style={{ marginTop: '64px', fontSize: '11px', letterSpacing: '5px', color: '#475569', fontWeight: 500 }}>COLLABORATE TO CREATE</div>
      </div>
    )
  },

  // SLIDE 2: 第一部分
  {
    id: 2,
    type: 'section',
    content: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '15px', letterSpacing: '6px', color: '#F59E0B', fontWeight: 600, marginBottom: '20px' }}>第一部分</div>
        <div style={{ fontSize: '64px', fontWeight: 800, letterSpacing: '-2.5px' }}>CBX 是什麼</div>
      </div>
    )
  },

  // SLIDE 3: 核心理念
  {
    id: 3,
    title: "核心理念",
    content: (
      <div style={{ maxWidth: '860px', padding: '0 60px', textAlign: 'center' }}>
        <div style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '40px', color: '#F59E0B' }}>
          合作無界，共創未來
        </div>
        <div style={{ fontSize: '23px', lineHeight: 1.7, color: '#E2E8F0' }}>
          深入挖掘並整合每位會員背後的「優勢資源」與「發展需求」，<br />
          透過精準匹配機制，協助會員實現現有業務之升級轉型，<br />
          或共同孵化全新商業項目。
        </div>
      </div>
    )
  },

  // SLIDE 4: 資源界定
  {
    id: 4,
    title: "資源界定",
    content: (
      <div style={{ maxWidth: '880px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '44px' }}>資源界定</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {['實體與固定資產（地產、廠房、設備）', '市場渠道與客戶生態', '技術、研發與知識產權', '專業能力與供應鏈', '資本與機構關係', '商業共創模式'].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 20px', borderRadius: '12px', fontSize: '18px' }}>{item}</div>
          ))}
        </div>
      </div>
    )
  },

  // SLIDE 5: 商業共創模式
  {
    id: 5,
    title: "商業共創模式",
    content: (
      <div style={{ maxWidth: '880px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '36px' }}>商業共創模式</div>
        <div style={{ fontSize: '20px', marginBottom: '28px', color: '#94A3B8' }}>會員可透過以下模式進行合作：</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
          {['股權合作', '合資（JV）', '收益分成（Revenue Sharing）', '戰略聯盟'].map((mode, i) => (
            <div key={i} style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', padding: '20px 24px', borderRadius: '14px', fontSize: '22px', fontWeight: 600, textAlign: 'center' }}>{mode}</div>
          ))}
        </div>
        <div style={{ marginTop: '28px', fontSize: '19px', color: '#CBD5E1', textAlign: 'center' }}>補足資源短板，共創新生意。</div>
      </div>
    )
  },

  // SLIDE 6: 引薦佣金慣例
  {
    id: 6,
    title: "引薦佣金慣例",
    content: (
      <div style={{ maxWidth: '820px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '44px' }}>引薦佣金慣例</div>
        <div style={{ fontSize: '22px', lineHeight: 1.7, color: '#E2E8F0' }}>
          當其他會員為你成功引薦、對接或促成實質商業合作或生意時，<br />
          受益方可自願給予引薦方合理回報。<br /><br />
          佣金比例、形式及是否給付完全由受益方會員自行決定。<br />
          本會不作強制規定。
        </div>
      </div>
    )
  },

  // SLIDE 7: 第二部分
  {
    id: 7,
    type: 'section',
    content: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '15px', letterSpacing: '6px', color: '#F59E0B', fontWeight: 600, marginBottom: '20px' }}>第二部分</div>
        <div style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px' }}>會員資格與承諾</div>
      </div>
    )
  },

  // SLIDE 8: 地域資格
  {
    id: 8,
    title: "地域資格",
    content: (
      <div style={{ maxWidth: '780px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '44px' }}>地域資格</div>
        <div style={{ fontSize: '24px', lineHeight: 1.65, color: '#E2E8F0' }}>
          本會僅接受於香港註冊或合法經營之企業及人士申請入會。<br /><br />
          所有申請人均須提供有效之香港商業或專業資格證明文件，以供核實。
        </div>
      </div>
    )
  },

  // SLIDE 9: 三大類別
  {
    id: 9,
    title: "三大類別",
    content: (
      <div style={{ maxWidth: '1140px', padding: '0 40px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '32px' }}>三大類別</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px 20px', borderRadius: '16px' }}>
            <div style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700, marginBottom: '6px' }}>TYPE A — 企業會員</div>
            <div style={{ fontSize: '15px', lineHeight: 1.55, color: '#CBD5E1' }}>
              具備實體運營、完整供應鏈或自主產品能力之香港企業法人。<br /><br />
              <strong style={{ color: '#F59E0B' }}>每企業僅限一席</strong><br />
              參會代表必須為股東或董事。<br />
              如由員工代表，須出具官方授權書。
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px 20px', borderRadius: '16px' }}>
            <div style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700, marginBottom: '6px' }}>TYPE B — 專業人士會員</div>
            <div style={{ fontSize: '15px', lineHeight: 1.55, color: '#CBD5E1' }}>
              持香港法定專業執照或專業資格之服務提供者（律師、會計師、醫生、工程師等）。<br /><br />
              若已成立獨立法人機構，必須以「企業會員」身份申請。<br />
              大型企業內部員工不得以個人身份加入。
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px 20px', borderRadius: '16px' }}>
            <div style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 700, marginBottom: '6px' }}>TYPE C — 業務顧問及代理</div>
            <div style={{ fontSize: '15px', lineHeight: 1.55, color: '#CBD5E1' }}>
              依靠銷售佣金或代理授權為主要運作模式（保險、直銷、房產代理、支付系統、金融產品等）。<br /><br />
              <strong style={{ color: '#F59E0B' }}>單一品牌獨佔制</strong><br />
              每品牌僅限一名代表（例如：宏利、保誠、安利等）。
            </div>
          </div>
        </div>
      </div>
    )
  },

  // SLIDE 10: 入會申請流程 (NEW)
  {
    id: 10,
    title: "入會申請流程",
    content: (
      <div style={{ maxWidth: '880px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '40px' }}>入會申請流程</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { num: '01', title: '提交申請', desc: '填寫官方入會申請表，並按會員類別提交所需證明文件' },
            { num: '02', title: '面試審核', desc: '由執行委員會安排進行一對一面試，了解商業背景與資源結構' },
            { num: '03', title: '委員會表決', desc: '由執行委員會進行表決（通過或否決入會申請）' },
            { num: '04', title: '繳納費用', desc: '獲通過之申請人須於指定期限內繳清會費及相關費用' },
            { num: '05', title: '建立檔案', desc: '新會員必須於商會系統內完整填寫《商業資源與需求檔案》' }
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.04)', padding: '14px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#F59E0B', width: '42px' }}>{step.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '18px', marginBottom: '2px' }}>{step.title}</div>
                <div style={{ fontSize: '15px', color: '#94A3B8' }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },

  // SLIDE 11: 商業檔案與會員系統義務 (NEW)
  {
    id: 11,
    title: "商業檔案與會員系統義務",
    content: (
      <div style={{ maxWidth: '860px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '36px' }}>商業檔案與會員系統義務</div>
        
        <div style={{ fontSize: '19px', marginBottom: '24px', color: '#94A3B8' }}>
          為落實「精準資源匹配」之核心宗旨，正式會員須登入會員專屬系統並完成以下義務：
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { icon: '📁', title: '商業檔案', desc: '完整填寫及持續更新《商業資源與需求檔案》' },
            { icon: '🤝', title: '1-on-1 Visit 記錄', desc: '登記每次與其他會員之深度拜訪及資源對接' },
            { icon: '🔄', title: 'Business Exchange 記錄', desc: '登記每次向其他會員提供、分享或對接之商業資源' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '18px', background: 'rgba(255,255,255,0.05)', padding: '18px 22px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '26px' }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '19px', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '16px', color: '#CBD5E1' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '20px', fontSize: '16px', color: '#F59E0B' }}>
          未完成者，即時暫停其投票權與被選舉權。
        </div>
      </div>
    )
  },

  // SLIDE 10: 會議制度與費用
  {
    id: 10,
    title: "會議制度與費用",
    content: (
      <div style={{ maxWidth: '880px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '36px' }}>會議制度與費用</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '32px' }}>
          {[
            { label: '年度會費', value: 'HK$1,200' },
            { label: '每次例會', value: 'HK$100' },
            { label: '統一續會', value: '每年10月' }
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 20px', borderRadius: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '8px' }}>{item.label}</div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#F59E0B' }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '18px', color: '#CBD5E1' }}>
          每月第三個星期五下午舉行常規例會。
        </div>
      </div>
    )
  },

  // SLIDE 11: 嘉賓列席機制 (NEW SEPARATE PAGE)
  {
    id: 11,
    title: "嘉賓列席機制",
    content: (
      <div style={{ maxWidth: '820px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '44px' }}>嘉賓列席機制</div>
        
        <div style={{ fontSize: '23px', lineHeight: 1.65, color: '#E2E8F0' }}>
          本會鼓勵會員邀請潛在優質商業夥伴以嘉賓身份列席例會。<br /><br />
          嘉賓每次列席費：<span style={{ color: '#F59E0B', fontWeight: 700 }}>HK$200</span><br /><br />
          同一位嘉賓於一個會計年度內（10月至翌年9月）最多僅限付費列席 <span style={{ color: '#F59E0B', fontWeight: 700 }}>2 次</span>。<br /><br />
          若擬繼續參與，必須依程序申請成為正式會員。
        </div>
      </div>
    )
  },

  // SLIDE 11: 出席與替代人規則
  {
    id: 11,
    title: "出席與替代人規則",
    content: (
      <div style={{ maxWidth: '880px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '40px' }}>出席與替代人規則</div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 20px', borderRadius: '14px' }}>
            <div style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 700, marginBottom: '10px' }}>TYPE A — 企業會員</div>
            <div style={{ fontSize: '17px', lineHeight: 1.55 }}>允許指派同公司合資格代表替代出席。</div>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 20px', borderRadius: '14px' }}>
            <div style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 700, marginBottom: '10px' }}>TYPE B — 專業人士會員</div>
            <div style={{ fontSize: '17px', lineHeight: 1.55 }}>嚴禁指派任何替代人出席。如無法親自出席，即視為缺席。</div>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 20px', borderRadius: '14px' }}>
            <div style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 700, marginBottom: '10px' }}>TYPE C — 業務顧問及代理</div>
            <div style={{ fontSize: '17px', lineHeight: 1.55 }}>嚴禁指派任何替代人出席。如無法親自出席，即視為缺席。</div>
          </div>
        </div>
      </div>
    )
  },

  // SLIDE 12: 投票權與被選舉權資格
  {
    id: 12,
    title: "投票權與被選舉權資格",
    content: (
      <div style={{ maxWidth: '920px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '32px' }}>投票權與被選舉權資格</div>
        <div style={{ fontSize: '19px', lineHeight: 1.55, color: '#E2E8F0', marginBottom: '32px' }}>
          所有正式會員凡於上一年度同時達成以下四項考核標準者，即具備<strong>投票權</strong>與<strong>被選舉權</strong>：
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '32px' }}>
          {[
            { label: '例會出席率', value: '≥ 80%' },
            { label: '一對一拜訪', value: '50 次/年' },
            { label: '資源對接', value: '≥ 52 次/年' },
            { label: '檔案完整度', value: '已完成' }
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 14px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '6px' }}>{item.label}</div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#F59E0B' }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '18px', lineHeight: 1.55, color: '#CBD5E1' }}>
          符合資格者可報名競選新一屆執行委員會。<br />
          由具備投票資格之會員進行無記名投票，選出 6 位執行委員會成員。<br />
          選出後由 6 位成員內部互選決定職位（會長、副會長、財務長等）。
        </div>
      </div>
    )
  },

  // SLIDE 13: 第三部分
  {
    id: 13,
    type: 'section',
    content: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '15px', letterSpacing: '6px', color: '#F59E0B', fontWeight: 600, marginBottom: '20px' }}>第三部分</div>
        <div style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px' }}>組織架構與選舉</div>
      </div>
    )
  },

  // SLIDE 14: 執行委員會
  {
    id: 14,
    title: "執行委員會",
    content: (
      <div style={{ maxWidth: '860px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '40px' }}>執行委員會</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px 22px', borderRadius: '14px' }}>
            <div style={{ fontSize: '15px', color: '#F59E0B', fontWeight: 600, marginBottom: '12px' }}>架構</div>
            <div style={{ fontSize: '19px', lineHeight: 1.6 }}>設會長、副會長、財務長及 3 位執行委員，共 6 人。</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px 22px', borderRadius: '14px' }}>
            <div style={{ fontSize: '15px', color: '#F59E0B', fontWeight: 600, marginBottom: '12px' }}>職責</div>
            <div style={{ fontSize: '19px', lineHeight: 1.6 }}>負責本會日常營運、審核入會申請、執行資源對接，以及處理初級紀律調查。</div>
          </div>
        </div>
        <div style={{ marginTop: '20px', fontSize: '18px', color: '#94A3B8' }}>任期：每年換屆一次</div>
      </div>
    )
  },

  // SLIDE 15: 選舉程序 (NEW PAGE)
  {
    id: 15,
    title: "選舉程序",
    content: (
      <div style={{ maxWidth: '880px', padding: '0 60px' }}>
        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '44px' }}>選舉程序</div>
        <div style={{ fontSize: '22px', lineHeight: 1.65, color: '#E2E8F0' }}>
          符合資格者可報名競選新一屆執行委員會。<br /><br />
          由具備投票資格之會員進行無記名投票，選出 6 位執行委員會成員。<br /><br />
          選出後由 6 位成員內部互選決定職位（會長、副會長、財務長等）。
        </div>
      </div>
    )
  },

  // SLIDE 16: Closing
  {
    id: 16,
    content: (
      <div style={{ textAlign: 'center', padding: '0 40px' }}>
        <div style={{ display: 'inline-block', padding: '6px 20px', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '11px', letterSpacing: '4px', color: '#64748B', marginBottom: '32px' }}>HONG KONG</div>
        <div style={{ fontSize: '68px', fontWeight: 800, letterSpacing: '-3px', marginBottom: '16px' }}>Join CBX</div>
        <div style={{ fontSize: '26px', color: '#F59E0B', marginBottom: '48px' }}>中商匯 — 合作無界，共創未來</div>
        <div style={{ height: '1px', width: '64px', background: 'rgba(255,255,255,0.2)', margin: '0 auto 40px' }} />
        <div style={{ fontSize: '17px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto' }}>
          透過精準資源匹配，實現業務增長與項目共創。<br />
          每月第三個星期五下午見。
        </div>
        <button onClick={() => window.location.href = '/'} style={{ marginTop: '56px', padding: '16px 44px', background: '#fff', color: '#0F172A', fontWeight: 700, borderRadius: '16px', border: 'none', fontSize: '15px', cursor: 'pointer' }}>
          返回首頁
        </button>
      </div>
    )
  }
];

export default function CBXPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToSlide = (index: number) => setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
      else if (e.key.toLowerCase() === 'f') { document.documentElement.requestFullscreen?.(); }
      else if (e.key === 'Escape' && document.fullscreenElement) { document.exitFullscreen(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#0F172A', color: '#fff', overflow: 'hidden', width: '100vw', height: '100vh' }}>
      {/* Slide Content - Full Viewport */}
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {/* Fixed Title on content slides */}
        {slide.title && (
          <div style={{ position: 'absolute', top: '48px', left: '60px', fontSize: '13px', letterSpacing: '4px', color: '#F59E0B', fontWeight: 600, zIndex: 10 }}>
            {slide.title}
          </div>
        )}
        
        {slide.content}
      </div>

      {/* Bottom nav */}
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 50 }}>
        <button onClick={prevSlide} disabled={currentSlide === 0} style={{ width: '42px', height: '42px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer', opacity: currentSlide === 0 ? 0.3 : 1, fontSize: '18px' }}>←</button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 18px' }}>
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} style={{ width: currentSlide === idx ? '26px' : '7px', height: '7px', borderRadius: '9999px', background: currentSlide === idx ? '#F59E0B' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }} />
          ))}
        </div>

        <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} style={{ width: '42px', height: '42px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer', opacity: currentSlide === totalSlides - 1 ? 0.3 : 1, fontSize: '18px' }}>→</button>
      </div>
    </div>
  );
}
