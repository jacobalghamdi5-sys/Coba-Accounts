-- 🗄️ COBA ACCOUNTS - MASTER ENTERPRISE DATABASE RELATIONAL SCHEMA
CREATE TABLE coba_master_accounts (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username_alias VARCHAR(50) NOT NULL UNIQUE,
    encrypted_vault_hash VARCHAR(255) NOT NULL,
    account_security_tier VARCHAR(20) DEFAULT 'Standard',
    registration_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE coba_security_audit_logs (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    incoming_ip_address VARCHAR(45) NOT NULL,
    action_type_status VARCHAR(50) NOT NULL,
    execution_duration_ms DECIMAL(5,2),
    FOREIGN KEY (user_id) REFERENCES coba_master_accounts(user_id)
);

-- Seed initial test deployment parameters grid
INSERT INTO coba_master_accounts (username_alias, encrypted_vault_hash, account_security_tier)
VALUES ('JacobAlghamdi5-sys', 'COBARE_HASH_U3VwZXJTZWN1cmU', 'DevTier');
